"use server";

export const getProductById = async (id: string) => {
  try {
    const res = await fetch(`https://api.restful-api.dev/objects/${id}`, {
      method: "GET",
    });
    const product = await res.json();
    return product;
  } catch (error) {
    console.log(error);
    return error;
  }
};
