"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  signIn as signInNextAuth,
  signOut as signOutNextAuth,
  useSession,
} from "next-auth/react";

interface UserContextProps {
  children: React.ReactNode;
}

interface User {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
}

interface UserContextType {
  user: User | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    if (session?.user) {
      const { id, name, email, image } = session.user as {
        id: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
      };

      setUser({
        id: id ?? "",
        name: name ?? "",
        email: email ?? "",
        image: image ?? "",
      });
    } else {
      setUser(null);
    }
  }, [session]);

  const signIn = async () => {
    await signInNextAuth();
  };

  const signOut = async () => {
    await signOutNextAuth();
  };

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};
