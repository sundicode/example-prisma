"use client";
import prisma from "@/prisma";
import { getAllUsers } from "@/server/actions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
const GetAllUsers = async () => {
  const [user, setUser] = useState([]);
  //   const users = await prisma.users.findMany();
  //   setUser(users);
  //   console.log("users", users);
  const QueryClient = useQueryClient();

  const {} = useMutation({
    mutationFn: () => {},
    onSuccess() {
      QueryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
  const { data, isError, isFetched, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    refetchInterval: 10000,
  });

  console.log(data);

  return <div>User hers</div>;
};

export default GetAllUsers;
