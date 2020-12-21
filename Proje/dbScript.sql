CREATE TABLE [dbo].[Music] (
    [Id]          INT            IDENTITY (1, 1) NOT NULL,
    [MusicName]   NVARCHAR (MAX) NOT NULL,
    [AlbumName]   NVARCHAR (MAX) NULL,
    [Artist]      NVARCHAR (MAX) NOT NULL,
    [Duration]    NVARCHAR (MAX) NULL,
    [ReleaseYear] INT            NOT NULL,
    CONSTRAINT [PK_dbo.Music] PRIMARY KEY CLUSTERED ([Id] ASC)
);

