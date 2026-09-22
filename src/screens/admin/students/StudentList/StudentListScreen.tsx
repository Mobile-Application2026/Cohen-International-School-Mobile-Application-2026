import React, { useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SearchBar from "../../../../components/inputs/SearchBar";
import AddButton from "../../../../components/Buttons/AddButton";
import ListItemCard from "../../../../components/cards/ListItemCard";
import Pagination from "../../../../components/common/Pagination";

import { STUDENTS_MOCK_DATA, Student } from "../mockData";

import { styles } from "./styles";

const PAGE_SIZE = 10;

const StudentListScreen = () => {
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

  const filteredStudents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return STUDENTS_MOCK_DATA;

    return STUDENTS_MOCK_DATA.filter(
      (student) =>
        student.name.toLowerCase().includes(query) ||
        student.className.toLowerCase().includes(query) ||
        student.rollNo.toString().includes(query)
    );
  }, [searchQuery]);

  // ==========================================
  // PAGINATION
  // ==========================================

  const totalPages = Math.max(
    1,
    Math.ceil(filteredStudents.length / PAGE_SIZE)
  );

  const paginatedStudents = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;

    return filteredStudents.slice(
      start,
      start + PAGE_SIZE
    );
  }, [filteredStudents, currentPage]);

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

  const renderItem = ({ item }: { item: Student }) => (
    <ListItemCard
      title={item.name}
      subtitle={`Class ${item.className} | Roll No. ${item.rollNo}`}
      avatarUri={item.avatarUri}
      onPress={() =>
        navigation.navigate("StudentDetails", {
          studentId: item.id,
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
          style={styles.searchBar}
        />

        <AddButton
          label="Add"
          onPress={() =>
            navigation.navigate("AddStudent")
          }
          style={styles.addButton}
        />

      </View>

      {/* =====================================
          LIST + PAGINATION FOOTER
      ===================================== */}

      <FlatList
        data={paginatedStudents}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No students found
          </Text>
        }
        ListFooterComponent={
          filteredStudents.length > 0 ? (
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

export default StudentListScreen;