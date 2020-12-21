namespace Proje.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class deneme : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Music",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        MusicName = c.String(nullable: false),
                        AlbumName = c.String(),
                        Artist = c.String(nullable: false),
                        Duration = c.String(),
                        ReleaseYear = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Music");
        }
    }
}
