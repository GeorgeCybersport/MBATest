const getData = async () => {
  const result = await fetch(
    "https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses"
  ).then((res) => res.json());
  return result.data.slice(0, 5);
};
export default async function () {
  const data = await getData();
  const newData = data.map((item) => {
    return {
      title: item.title,
      modules: [
        item.specializedSubjects.splice(0, 5),
        item.specializedSubjects,
      ],
    };
  });
  return newData;
}
