import supabase from "./supabase";

export async function signup({ name, email, password }) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
                avatar: "",
            },
        },
    });
    if (error) throw new Error(error.message);

    return data.user;
}

export async function loginApi({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) throw new Error(error.message);

    console.log(data);
    return data.user;
}

export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession();

    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();

    console.log(data);

    if (error) throw new Error(error.message);

    return data?.user;
}

export async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
}
export async function updateCurrentUser({ password, name }) {
    // 1. Update password or name
    let updateData;
    if (password) updateData = { password };
    if (name) updateData = { data: { name } };
    const { data, error } = await supabase.auth.updateUser(updateData);

    //2.
}

export async function createUserAsAdmin({ name, email, password, role = "user" }) {
    // Get the current session token to authorize the request
    const { data: sessionData } = await supabase.auth.getSession();
    const token = sessionData?.session?.access_token;

    if (!token) throw new Error("No active session — please log in again.");

    const res = await fetch("/api/auth/create-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email, password, role }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to create user");
    return data.user;
}
