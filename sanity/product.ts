export const product = {
    name : "product",
    type: "document",
    title: "Product",
    fields:[
        {
            name: "title",
            title: "Product Title",
            type: "string"
        },

        {
            name: "description",
            title: "Product Description",
            type: "string"
        },

        {
            name: "price",
            title: "Product Price",
            type: "string"
        },

        {
            name: "image",
            title: "Product Image",
            type: "image"
        },
        
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "name",
              maxLength: 96,
            },
        },

        {
            name: "category",
            title: "Product Category",
            type: "reference",
            to:[
                {
                    type:"category"
                }
            ]
        },

        
    ]
}