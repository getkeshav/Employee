using Microsoft.Azure.Cosmos.Table;
using System;

public class AzureTableHelper
{
    private readonly CloudTable _table;

    public AzureTableHelper(string connectionString, string tableName)
    {
        var storageAccount = CloudStorageAccount.Parse(connectionString);
        var tableClient = storageAccount.CreateCloudTableClient(new TableClientConfiguration());
        _table = tableClient.GetTableReference(tableName);
        _table.CreateIfNotExists();
    }

    public void InsertEntity(string name, string location)
    {
        var entity = new DynamicTableEntity("examplePartition", DateTime.Now.Ticks.ToString());
        entity.Properties.Add("Name", new EntityProperty(name));
        entity.Properties.Add("Location", new EntityProperty(location));

        var insertOperation = TableOperation.InsertOrReplace(entity);
        _table.Execute(insertOperation);
    }
}
