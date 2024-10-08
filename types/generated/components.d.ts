import type { Schema, Attribute } from '@strapi/strapi';

export interface IdentityIdentity extends Schema.Component {
  collectionName: 'components_identity_identities';
  info: {
    displayName: 'Identity';
    icon: 'alien';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    email: Attribute.Email;
    employee: Attribute.Component<'identity.employee'>;
  };
}

export interface IdentityEmployee extends Schema.Component {
  collectionName: 'components_identity_employees';
  info: {
    displayName: 'Employee';
    icon: 'alien';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'identity.identity': IdentityIdentity;
      'identity.employee': IdentityEmployee;
    }
  }
}
