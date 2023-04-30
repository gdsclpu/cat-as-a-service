import expressApp from './server';

const port = process.env.PORT || 3000;

expressApp.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});