import { UserButton } from '@clerk/clerk-react';

function ProtectedPage() {
  return (
    <div>
      <UserButton />
    </div>
  );
}

export default ProtectedPage;
