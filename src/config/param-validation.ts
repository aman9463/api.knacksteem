import * as Joi from 'joi';

export default {
  // POST /api/users
  createUser: {
    body: {
      account: Joi.string().required(),
      code: Joi.string(),
      state: Joi.string(),
    }
  },
  confirmExistence: {
    body: {
      account: Joi.string().required(),
    }
  },
  createPost: {
    body: {
      author: Joi.string().required(),
      permlink: Joi.string().required(),
    }
  },
  editPost: {
    body: {
      author: Joi.string().required(),
      permlink: Joi.string().required(),
      title: Joi.string().required(),
      body: Joi.string().required(),
      json_metadata: Joi.object().required()
    }
  },
  createSponsor: {
    body: {
      sponsor: Joi.string().required(),
    }
  },
  createProjectSponsor: {
    body: {
      sponsor: Joi.string().required(),
    }
  },
  voteWithSponsors: {
    body: {
      author: Joi.string().required(),
      permlink: Joi.string().required(),
      vote: Joi.number().required()
    }
  },
  createProject: {
    body: {
      owner: Joi.string().required(),
      platform: Joi.string().required(),
      external_id: Joi.number().required(),
      project_name: Joi.string().required(),
    }
  },
  banUser: {
    body: {
      account: Joi.string(),
      banned: Joi.number().integer().min(0).max(9),
      bannedBy: Joi.string(),
      banReason: Joi.string(),
    },
    params: {
      userId: Joi.string(),
    }
  },
  createMod: {
    body: {
      account: Joi.string().required(),
      referrer: Joi.string(),
    },
    params: {}
  },
  removeMod: {
    body: {
      account: Joi.string().required(),
    },
    params: {}
  },
  login: {
    body: {
      code: Joi.string().required(),
    },
    params: {}
  },
  // SOCIAL LOGIN
  socialLogin: {
    body: {
      code: Joi.string(),
      state: Joi.string(),
      redirectUri: Joi.string()
    },
    params: {
      provider: Joi.string().valid('github','facebook','linkedin').required()
    }
  },
  emailRequest: {
    body: {
      user_id: Joi.string().required(),
      email: Joi.string().required()
    }
  },
  emailConfirm: {
    body: {
      token: Joi.string().required()
    }
  },
  phoneRequest: {
    body: {
      user_id: Joi.string().required(),
      country_code: Joi.string().required(),
      phone_number: Joi.string().required()
    }
  },
  phoneConfirm: {
    body: {
      user_id: Joi.string().required(),
      code: Joi.string().required()
    }
  },
  tables: {
    query: {
      limit: Joi.number().min(1)
    }
  },
  avatarUser: {
    query: {
      size: Joi.number().min(48).max(512),
      round: Joi.boolean()
    }
  }
};
