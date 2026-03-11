import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center gap-4 bg-background flex-col">
      <h1 className="text-2xl font-semibold">Welcome to Resonane</h1>
      <div className="flex items-center gap-4">
        <OrganizationSwitcher />
        <UserButton />
      </div>
    </div>
  );
}
