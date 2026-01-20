"use server"

export type SidebarMenuItem={
label:string;
href?:string;
children?:SidebarMenuItem[];
}

export async function getSideBarMenu():Promise<SidebarMenuItem[]>{

    return[
        {
            label:"Dashboard",
            href:"/dashboard"
        },
        {
            label:"Master",
            children:[
                {
                    label:"User",
                    href:"/user"
                },
                {
                    label:"Role",
                    href:"/role"
                },
                {
                    label:"Permission",
                    children:[
                        {
                            label:"Create",
                            href:"/permission/create"
                        },
                        {
                            label:"Edit",
                            href:"/permission/edit"
                        }
                    ]
                }

            ]
        }
    ]
}