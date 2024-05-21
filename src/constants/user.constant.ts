export const UserRole = {
    seller: 'seller',
    manager: 'manager',
    superAdmin: 'superAdmin',
    admin: 'admin',
} as const;

export const userRoleOptions = [
    {
        value: UserRole.manager,
        label: "Manager",
    },
    {
        value: UserRole.seller,
        label: "Seller",
    },
    {
        value: UserRole.admin,
        label: "Admin",
    },
]