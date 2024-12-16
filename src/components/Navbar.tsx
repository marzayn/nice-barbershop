"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, UserCheck } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/nice.png";

export function Navbar() {
  const menuItems = [
    {
      title: "User Baru",
      description: "Tambah customer baru",
      icon: UserPlus,
      href: "/new-user",
      color: "bg-green-50 hover:bg-green-100",
    },
    {
      title: "User Lama",
      description: "Cek data customer lama",
      icon: UserCheck,
      href: "/existing-user",
      color: "bg-blue-50 hover:bg-blue-100",
    },
  ];

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center justify-items-center pt-20">
          <Image src={Logo} alt="Nice Barbershop" width={100} height={100} />
          <h1 className="text-2xl font-bold text-gray-600 pt-5">
            Biar Rambut Makin Nice😄
          </h1>
          <p className="text-gray-600">Silakan daftar dulu yuk!</p>
        </div>

        <div className="grid gap-4">
          {menuItems.map((item) => (
            <Link key={item.title} href={item.href}>
              <Card
                className={`
                  ${item.color} 
                  transition-all duration-300 
                  hover:shadow-lg 
                  border-2 border-transparent 
                  hover:border-primary
                `}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`
                      p-3 rounded-full 
                      bg-white 
                      shadow-md
                    `}
                    >
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-800">
                        {item.title}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
