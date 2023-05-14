import { SiteClient } from "datocms-client";

const client = new SiteClient(process.env.DATO_API_TOKEN);

export async function getPosts() {
    return await client.items.all({ filter: { type: "post" } });
}

export async function getPostById(id) {
    return await client.items.find(id);
}
