"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import Logo from "@/assets/nice.png";

const schema = z.object({
  arrivalTime: z.string(),
  name: z.string().min(1, "Nama wajib diisi"),
  whatsapp: z.string().min(10, "Nomor WhatsApp tidak valid"),
  treatment: z.string(),
  paymentMethod: z.string(),
  capster: z.string(),
});

type FormData = z.infer<typeof schema>;

export function FormNewUser() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      arrivalTime: "",
      name: "",
      whatsapp: "",
      treatment: "",
      paymentMethod: "",
      capster: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("User Baru:", data);
    alert("Data berhasil disimpan!");
  };

  return (
    <>
      <div className="justify-items-center">
        <Image src={Logo} alt="Nice Barbershop" width={100} height={100} />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 p-4 max-w-md mx-auto"
        >
          <FormField
            control={form.control}
            name="arrivalTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Waktu Kedatangan</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Customer</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan nama" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nomor WhatsApp</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan nomor WhatsApp" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="treatment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Treatment</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih treatment" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Haircut">Haircut</SelectItem>
                    <SelectItem value="Shave">Shave</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Metode Pembayaran</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-4"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="Cash" />
                      </FormControl>
                      <FormLabel className="font-normal">Cash</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="QRIS" />
                      </FormControl>
                      <FormLabel className="font-normal">QRIS</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="Debit" />
                      </FormControl>
                      <FormLabel className="font-normal">Debit</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="capster"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Capster</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-4"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="RZ" />
                      </FormControl>
                      <FormLabel className="font-normal">RZ</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="AR" />
                      </FormControl>
                      <FormLabel className="font-normal">AR</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
