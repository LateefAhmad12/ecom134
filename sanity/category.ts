import { defineField, defineType } from "sanity";

export const Category = defineType({
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Category Name",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
  ],
});
