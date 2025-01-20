using Microsoft.EntityFrameworkCore;

public static class SeedData 
{
    public static void Seed(ModelBuilder builder)
    {
        builder.Entity<HouseEntity>().HasData(new List<HouseEntity> {
            new HouseEntity {
                Id = 1,
                Address = "1234 Main St",
                Country = "USA",
                Description = "A nice home in the suburbs",
                Price = 120000
            },
            new HouseEntity {
                Id = 2,
                Address = "5678 Elm St",
                Country = "USA",
                Description = "A cozy home in the city",
                Price = 200000
            },
            new HouseEntity {
                Id = 3,
                Address = "9012 Oak St",
                Country = "USA",
                Description = "A spacious home in the countryside",
                Price = 300000
            }
        });
    }
}