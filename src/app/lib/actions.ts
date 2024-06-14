"use server";

import { redirect } from "next/navigation";

export async function GetAllData() {
  try {
    const res = await fetch("https://api.restful-api.dev/objects");
    return res.json();
  } catch (error) {
    return error;
  }
}

export async function saveProduct(prevState: any, formData: FormData) {
  const bodyData = {
    name: formData.get("name"),
    data: {
      year: formData.get("year"),
      price: formData.get("price"),
      "CPU model": formData.get("cpu"),
      " Hard disk size": formData.get("hardisk"),
    },
  };
  try {
    const res = await fetch("https://api.restful-api.dev/objects", {
      body: JSON.stringify(bodyData),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const product = await res.json();
    return { success: true, product };
  } catch (error) {
    console.log(error);
  }
  redirect("/");
}

export async function updateProduct(
  prevState: unknown,
  formData: FormData,
  id: string
) {
  const bodyData = {
    name: formData.get("name"),
    data: {
      year: formData.get("year"),
      price: formData.get("price"),
      "CPU model": formData.get("cpu"),
      " Hard disk size": formData.get("hardisk"),
    },
  };
  try {
    const res = await fetch(`https://api.restful-api.dev/objects/${id}`, {
      method: "PUT",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const product = await res.json();
    return { success: true, product };
  } catch (error) {
    console.log(error);
  }
  redirect("/");
}

export async function deleteProduct(id: string) {
  try {
    const res = await fetch(`https://api.restful-api.dev/objects/${id}`, {
      method: "DELETE",
    });
    const product = await res.json();
    return { success: true, product };
  } catch (error) {
    console.log(error);
  }
}
