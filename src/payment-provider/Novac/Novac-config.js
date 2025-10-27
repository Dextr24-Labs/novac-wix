import * as paymentProvider from 'interfaces-psp-v1-payment-service-provider';

/** @returns {import('interfaces-psp-v1-payment-service-provider').PaymentServiceProviderConfig} */
export function getConfig() {
  return {
    title: 'Budpay',
    paymentMethods: [{
      hostedPage: {
        title: 'Novac Payments',
        billingAddressMandatoryFields: ['EMAIL'],
        logos: {
          colored: {
            png: ''
          }
        },
      }
    }],
    credentialsFields: [{
      simpleField: {
        name: 'secret_key',
        label: 'Secret Key'
      },
      simpleField: {
        name: 'public_key',
        label: 'Public Key'
      },
      simpleField: {
        name: 'logo_url',
        label: 'Merchant Logo'
      }
    }]
  }
}