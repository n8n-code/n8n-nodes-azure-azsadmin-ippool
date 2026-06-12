import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureAzsadminIppoolApi implements ICredentialType {
        name = 'N8nDevAzureAzsadminIppoolApi';

        displayName = 'Azure Azsadmin Ippool API';

        icon: Icon = { light: 'file:../nodes/AzureAzsadminIppool/azure-azsadmin-ippool.png', dark: 'file:../nodes/AzureAzsadminIppool/azure-azsadmin-ippool.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Azsadmin Ippool API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
