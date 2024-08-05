const { globSync } = require('glob')

const routes = globSync('../../../app/routes/**/*.js')

const mockRoutes = []

for (const file of routes) {
  const route = require(file)

  const mockPath = route.path || route[0].path

  mockRoutes.push({ path: mockPath })

  jest.doMock(file, () => [{ path: mockPath }])
}

const router = require('../../../app/plugins/router')

describe('router plugin', () => {
  test('should register routes when register is called', () => {
    const mockServer = {
      route: jest.fn()
    }

    router.plugin.register(mockServer)

    expect(mockServer.route).toHaveBeenCalledWith(
      expect.arrayContaining(mockRoutes)
    )
  })
})
