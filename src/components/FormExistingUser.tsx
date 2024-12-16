"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FormExistingUser() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCheck = () => {
    // Simulasi pencarian user lama
    console.log("Cek nomor:", phoneNumber);
    // Ganti dengan logika pencarian sebenarnya
    alert("User ditemukan, lanjutkan input!");
  };

  return (
    <div className="justify-items-center">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Cek User Lama</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone-number">Nomor Telepon</Label>
              <Input
                id="phone-number"
                type="text"
                placeholder="Masukkan nomor telepon"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <Button onClick={handleCheck} className="w-full">
              Cek User
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
