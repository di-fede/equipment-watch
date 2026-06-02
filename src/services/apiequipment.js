import supabase from "./supabase";

export async function getEquipment() {
    const { data, error } = await supabase.from("equipment").select("*");

    if (error) {
        console.error(error);
        throw new Error("Equipment could not be loaded");
    }
    return data;
}
