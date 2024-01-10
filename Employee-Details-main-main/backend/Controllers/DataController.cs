using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Cosmos.Table;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class DataController : ControllerBase
{
    private readonly CloudTable _table;

    public DataController(CloudTable table)
    {
        _table = table;
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] DataEntity data)
    {
        if (data == null || string.IsNullOrEmpty(data.Name) || string.IsNullOrEmpty(data.Location))
        {
            return BadRequest("Invalid payload");
        }

        var operation = TableOperation.InsertOrReplace(data);
        await _table.ExecuteAsync(operation);

        return Ok("Data stored successfully");
    }
}
