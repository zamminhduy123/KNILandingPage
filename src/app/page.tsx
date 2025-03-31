import {redirect} from 'next/navigation';

// Redirect the user to the default locale when `/` is requested
export default function RootPage() {
  redirect('/vn');

  return (
    <main>
      <div>Next.js on Render</div>
    </main>
  );
}