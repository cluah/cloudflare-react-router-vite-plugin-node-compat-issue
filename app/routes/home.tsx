import postgres from 'postgres';
import type { Route } from './+types/home';

export async function loader() {
  const sql = postgres(
    'postgresql://react.wjtabypwdxtwbzexsdne:router@aws-0-us-east-2.pooler.supabase.com:5432/postgres'
  );
  const res = await sql`select 123;`;
  return JSON.stringify(res);
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <div>{loaderData}</div>;
}
