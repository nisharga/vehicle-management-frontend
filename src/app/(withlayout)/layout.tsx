"use client";
import Contents from "@/components/ui/Contents";
import LoadingPage from "@/components/ui/LoadingPage";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //..........................................................
  // this code is protected route
  useEffect(() => {
    if (!userLoggedIn) router.push("/login");
    setIsLoading(true);
  }, [userLoggedIn, router]);

  //......................................................
  if (!isLoading) return <LoadingPage />;

  // protected router end
  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;

// with layout page lidding hear
