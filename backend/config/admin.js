module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2ec70a60ff228c31ad00ccb84c6606fb'),
  },
});
