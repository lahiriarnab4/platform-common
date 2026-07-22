# platform-common

A private shared package family for common platform concerns used across microservices.

## Packages

- @platform-common/auth: authentication middleware utilities
- @platform-common/authorization: authorization helpers (planned)
- @platform-common/logger: logging helpers (planned)
- @platform-common/errors: error handling helpers (planned)
- @platform-common/rate-limit: rate limiting helpers (planned)
- @platform-common/utils: common utilities (planned)

## Versioning and release strategy

- Use semantic versioning for each package.
- Publish from the package directory to the organization private registry.
- Keep backward-compatible changes in minor/patch releases.
- Introduce breaking changes only in major releases.
- Update the consuming service to pin the package version in its dependencies.
