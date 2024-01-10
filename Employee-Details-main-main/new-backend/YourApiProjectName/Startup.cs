using Microsoft.Azure.Cosmos.Table;

public void ConfigureServices(IServiceCollection services)
{
    // Other service configurations...

    var connectionString = Configuration.GetConnectionString("AzureTableStorageConnection");
    var tableClient = new CloudTableClient(new Uri(connectionString), new StorageCredentials(connectionString));
    var table = tableClient.GetTableReference("YourTableName");
    table.CreateIfNotExists();

    services.AddSingleton(table);
}
