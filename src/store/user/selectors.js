export const initialState = {
  user: {},
}

export const getUser = (state = initialState) => state.user || initialState.user

export const getFormifiedUser = (state = initialState) => {
  if (state.user) {
    return Object.assign({}, state.formData, {
      email: state.user.email,
      firstName: state.user.firstName,
      id: state.user.id,
      lastName: state.user.lastName,
      phone: state.user.phone,
      // TODO remove
      company: state.user.company,
      department: state.user.department,
      created: state.user.created,
      hasSignature: state.user.hasSignature,
      signature: state.user.signature,
      permissions: state.user.permissions,
      permissionsMetadata: state.user.permissionsMetadata,
      superUser: state.user.superUser,
    })
  }

  return initialState
}
