// Demo-only auth: there is no backend, so accounts live in this browser's
// localStorage. Passwords are hashed (SHA-256) instead of stored as plain text.
const USERS_KEY = "zephyr_users";

async function hash(text) {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

export async function registerUser({ userName, email, password, number }) {
  const users = getUsers();
  const name = userName.trim();
  if (users.some((u) => u.userName.toLowerCase() === name.toLowerCase()))
    throw new Error("That username is already taken.");
  if (users.some((u) => u.email.toLowerCase() === email.trim().toLowerCase()))
    throw new Error("An account with this email already exists.");
  const record = {
    userName: name,
    email: email.trim(),
    number: number.trim(),
    passwordHash: await hash(password),
  };
  localStorage.setItem(USERS_KEY, JSON.stringify([...users, record]));
  return { userName: record.userName, email: record.email, number: record.number };
}

export async function loginUser({ userName, password }) {
  const name = userName.trim().toLowerCase();
  const user = getUsers().find((u) => u.userName.toLowerCase() === name);
  if (!user || user.passwordHash !== (await hash(password)))
    throw new Error("Wrong username or password.");
  return { userName: user.userName, email: user.email, number: user.number };
}
