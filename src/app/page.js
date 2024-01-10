"use client";
import { Button, Input } from "@nextui-org/react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useState } from "react";
const key = "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";
export default function Home() {
  const [value, setValue] = useState("");
  const [data, setData] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`https://api.openai.com/v1/images/generations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        prompt: value,
        n: 3,
        size: "256x256",
      }),
    })
      .then((res) => res.json())
      .then((result) => setData(result));
  };

  console.log(data);
  console.log(value);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <nav className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold">Dalle</h1>
        <div>
          <ThemeSwitcher />
        </div>
      </nav>
      <section className="min-h-[70vh] mt-16 flex justify-between flex-col">
        <div className="min-h-[300px] flex gap-2 bg-gray-800">
          {data.data.map((image, i) => (
            <img src={image.url} alt="dalle image" key={i} />
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-2 h-10 ">
          <Input
            size="xs"
            radius="none"
            className="h-[40px]"
            type="text"
            placeholder="Discribe image"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Button type="submit" className="rounded-none " color="primary">
            Generate
          </Button>
        </form>
      </section>
    </main>
  );
}
