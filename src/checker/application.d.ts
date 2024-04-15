export type DatacapAllocation = {
        Version: number;
        ID: string;
        "Issue Number": string;
        Client: {
            Name: string;
            Region: string;
            Industry: string;
            Website: string;
            Role: string;
        }
        Project: object;
        Datacap: {
            Type: string;
            "Data Type": string;
            "Total Requested Amount": string;
            "Single Size Dataset": string;
            "Replicas": number;
            "Weekly Allocation": string;
        }
        Lifecycle: {
            State: string;
            "Validated At": string;
            "Validated By": string;
            "Active": boolean;
            "Updated At": string;
            "Active Request ID": string;
            "On Chain Address": string;
            "Multisig Address": string;
        }
        "Allocation Requests": [{
            "ID": string;
            "Request Type": string;
            "Created At": string;
            "Updated At": string;
            "Active": boolean;
            "Allocation Amount": string;
            "Signers": [{
                "Github Username": string;
                "Signing Address": string;
                "Created At": string;
                "Message CID": string;
            }]
        }]
    }
