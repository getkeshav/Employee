using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace App1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private static List<Employee> employees = new List<Employee>();

        // GET: api/Employees
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return employees;
        }

        // GET: api/Employees/5
        [HttpGet("{id}")]
        public ActionResult<Employee> Get(int id)
        {
            var employee = employees.FirstOrDefault(e => e.Id == id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

        // POST: api/Employees
        [HttpPost]
        public ActionResult<Employee> Post([FromBody] Employee employee)
        {
            if (employee == null)
            {
                return BadRequest("Employee data is null");
            }

            // Simulate auto-increment for Id (replace with your actual logic)
            employee.Id = employees.Count + 1;

            employees.Add(employee);

            return CreatedAtAction(nameof(Get), new { id = employee.Id }, employee);
        }

        // PUT: api/Employees/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Employee updatedEmployee)
        {
            var existingEmployee = employees.FirstOrDefault(e => e.Id == id);

            if (existingEmployee == null)
            {
                return NotFound();
            }

            existingEmployee.EmployeeName = updatedEmployee.EmployeeName;
            existingEmployee.Date = updatedEmployee.Date;
            existingEmployee.Location = updatedEmployee.Location;
            existingEmployee.YearsOfExperience = updatedEmployee.YearsOfExperience;

            return NoContent();
        }

        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var employee = employees.FirstOrDefault(e => e.Id == id);

            if (employee == null)
            {
                return NotFound();
            }

            employees.Remove(employee);

            return NoContent();
        }
    }
}
