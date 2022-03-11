module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f8c7c81fca76937675dd7f643efe6c53'),
  },
});
