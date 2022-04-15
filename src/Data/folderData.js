const explorer = {
  name: 'root',
  isFolder: true,
  items: [
    {
      name: 'public',
      isFolder: true,
      items: [
        {
          name: 'folder 1',
          isFolder: true,
          items: [
            {
              name: 'index.html',
              isFolder: false,
            },
            {
              name: 'hello.html',
              isFolder: false,
            },
          ],
        },
        {
          name: 'public file',
          isFolder: false,
        },
      ],
    },
    {
      name: 'src1',
      isFolder: true,
      items: [
        {
          name: 'index.js',
          isFolder: false,
        },
        {
          name: 'hello.js',
          isFolder: false,
        },
        {
          name: 'style.css',
          isFolder: false,
        },
      ],
    },
    {
      name: 'package.json',
      isFolder: false,
    },
  ],
};

export default explorer;
