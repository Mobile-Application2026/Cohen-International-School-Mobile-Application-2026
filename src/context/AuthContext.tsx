import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";


// =============================================================
// USER ROLE
// =============================================================

type UserRole =
  | "admin"
  | "teacher"
  | "student"
  | "parent";


// =============================================================
// USER
// =============================================================

type User = {
  email: string;
  role: UserRole;
};


// =============================================================
// AUTH CONTEXT TYPE
// =============================================================

type AuthContextType = {
  user: User | null;

  isLoggedIn: boolean;

  isLoading: boolean;

  login: (
    email: string,
    role: UserRole
  ) => void;

  logout: () => void;
};


// =============================================================
// AUTH CONTEXT
// =============================================================

const AuthContext =
  createContext<AuthContextType | undefined>(
    undefined
  );


// =============================================================
// STORAGE KEY
// =============================================================

const AUTH_STORAGE_KEY =
  "@cohen_school_user";


// =============================================================
// AUTH PROVIDER PROPS
// =============================================================

type AuthProviderProps = {
  children: ReactNode;
};


// =============================================================
// AUTH PROVIDER
// =============================================================

export const AuthProvider = ({
  children,
}: AuthProviderProps) => {

  // ===========================================================
  // USER STATE
  // ===========================================================

  const [user, setUser] =
    useState<User | null>(null);


  // ===========================================================
  // LOADING STATE
  // ===========================================================

  const [isLoading, setIsLoading] =
    useState(true);


  // ===========================================================
  // CHECK SAVED LOGIN WHEN APP STARTS
  // ===========================================================

  useEffect(() => {

    const loadSavedUser = async () => {

      try {

        const savedUser =
          await AsyncStorage.getItem(
            AUTH_STORAGE_KEY
          );


        // -------------------------------------------------------
        // SAVED USER FOUND
        // -------------------------------------------------------

        if (savedUser) {

          const parsedUser: User =
            JSON.parse(savedUser);

          setUser(parsedUser);
        }

      } catch (error) {

        console.log(
          "Error loading saved user:",
          error
        );

      } finally {

        // App finished checking storage
        setIsLoading(false);
      }
    };


    loadSavedUser();

  }, []);


  // ===========================================================
  // LOGIN
  // ===========================================================

  const login = async (
    email: string,
    role: UserRole
  ) => {

    const loggedInUser: User = {
      email,
      role,
    };


    // ---------------------------------------------------------
    // SET USER IN MEMORY
    // ---------------------------------------------------------

    setUser(loggedInUser);


    // ---------------------------------------------------------
    // SAVE USER IN DEVICE STORAGE
    // ---------------------------------------------------------

    try {

      await AsyncStorage.setItem(
        AUTH_STORAGE_KEY,
        JSON.stringify(loggedInUser)
      );

    } catch (error) {

      console.log(
        "Error saving user:",
        error
      );
    }
  };


  // ===========================================================
  // LOGOUT
  // ===========================================================

  const logout = async () => {

    try {

      // Remove saved login
      await AsyncStorage.removeItem(
        AUTH_STORAGE_KEY
      );

    } catch (error) {

      console.log(
        "Error removing saved user:",
        error
      );

    } finally {

      // Remove user from current app session
      setUser(null);
    }
  };


  // ===========================================================
  // LOGIN STATUS
  // ===========================================================

  const isLoggedIn =
    user !== null;


  // ===========================================================
  // PROVIDER
  // ===========================================================

  return (

    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        isLoading,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>
  );
};


// =============================================================
// USE AUTH
// =============================================================

export const useAuth = () => {

  const context =
    useContext(AuthContext);


  if (!context) {

    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }


  return context;
};