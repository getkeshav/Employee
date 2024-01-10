using Microsoft.Azure.Cosmos.Table;

public class DataEntity : TableEntity
{
    public DataEntity(string partitionKey, string rowKey)
        : base(partitionKey, rowKey)
    {
    }

    public DataEntity()
    {
    }

    public string Name { get; set; }
    public string Location { get; set; }

    
}
