import categoryList from "./categories";
import memberList from "./members";

// export function getDenormalizedMembers {
//   return memberList.map((members) => {
//     return {
//       ...members,
//       details: members.find((d) => d.id === member.category)
//     };
//   });
// }

export function getDenormalizedCategories() {
  return categoryList.map((category) => {
    return {
      ...category,
      members: category.members.map((member) => memberList.find((m) => m.id === member))
    };
  });
}
