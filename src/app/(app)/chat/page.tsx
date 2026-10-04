import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { SignOutButton } from "@/components/sign-out-button";

export default async function ChatPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-semibold tracking-tight">
        Welcome to ORVYN, {session.user.name}
      </h1>
      <p className="text-muted-foreground">The chat interface comes next.</p>
      <SignOutButton />
    </main>
  );
}