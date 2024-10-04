import { User } from "@/_db";
export const dynamic = "force-dynamic";

async function getUserData() {
  const users = await User.findAll({
    attributes: ["id", "firstName", "lastName", "role"],
  });
  return { users };
}

export default async function Page() {
  const { users } = await getUserData();
  console.log("users", users);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <li>
              <span>Name: </span> {user.firstName} {user.lastName}
            </li>
            <p>
              Role: <span> {user.role}</span>
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
}
