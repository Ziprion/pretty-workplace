export const getInitials = ({ firstName = ' ', lastName = ' ' }) => `${firstName[0]}${lastName[0]}`;

export const getFullName = ({ firstName = '', lastName = '' }) => `${firstName} ${lastName}`;
