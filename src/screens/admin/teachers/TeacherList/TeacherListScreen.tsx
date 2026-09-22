import React, { useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SearchBar from "../../../../components/inputs/SearchBar";
import AddButton from "../../../../components/Buttons/AddButton";
import ListItemCard from "../../../../components/cards/ListItemCard";
import Pagination from "../../../../components/common/Pagination";

import { TEACHERS_MOCK_DATA, Teacher } from "../mockData";

import { styles } from "./styles";

const PAGE_SIZE = 10;

const TeacherListScreen = () => {
  const navigation = useNavigation<any>();

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // ==========================================
  // SEARCH
  // ==========================================

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    setCurrentPage(1);
  };

  const filteredTeachers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return TEACHERS_MOCK_DATA;

    return TEACHERS_MOCK_DATA.filter(
      (teacher) =>
        teacher.name.toLowerCase().includes(query) ||
        teacher.subject.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // ==========================================
  // PAGINATION
  // ==========================================

  const totalPages = Math.max(
    1,
    Math.ceil(filteredTeachers.length / PAGE_SIZE)
  );

  const paginatedTeachers = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;

    return filteredTeachers.slice(
      start,
      start + PAGE_SIZE
    );
  }, [filteredTeachers, currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) =>
      Math.min(totalPages, prev + 1)
    );
  };

  // ==========================================
  // RENDER
  // ==========================================

  const renderItem = ({ item }: { item: Teacher }) => (
    <ListItemCard
      title={item.name}
      subtitle={item.subject}
      avatarUri={item.avatarUri}
      onPress={() =>
        navigation.navigate("TeacherDetails", {
          teacherId: item.id,
        })
      }
    />
  );

  return (
    <View style={styles.container}>

      {/* =====================================
          HEADER: SEARCH + ADD
      ===================================== */}

      <View style={styles.headerRow}>

        <SearchBar
          value={searchQuery}
          onChangeText={handleSearchChange}
          placeholder="Search by name or subject"
          style={styles.searchBar}
        />

        <AddButton
          label="Add"
          onPress={() =>
            navigation.navigate("AddTeacher")
          }
          style={styles.addButton}
        />

      </View>

      {/* =====================================
          LIST + PAGINATION FOOTER
      ===================================== */}

      <FlatList
        data={paginatedTeachers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No teachers found
          </Text>
        }
        ListFooterComponent={
          filteredTeachers.length > 0 ? (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPrev={handlePrevPage}
              onNext={handleNextPage}
            />
          ) : null
        }
      />

    </View>
  );
};

export default TeacherListScreen;