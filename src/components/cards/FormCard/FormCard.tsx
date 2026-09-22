import React from "react";

import {
  View,
  Text,
  ViewProps,
} from "react-native";

import { styles } from "./styles";


interface FormCardProps extends ViewProps {
  title: string;
  children: React.ReactNode;
}


const FormCard: React.FC<FormCardProps> = ({
  title,
  children,
  style,
  ...rest
}) => {

  return (

    <View
      style={[
        styles.card,
        style,
      ]}
      {...rest}
    >

      <Text style={styles.sectionTitle}>
        {title}
      </Text>

      {children}

    </View>

  );
};


export default FormCard;