import { UnauthorizedException } from "@nestjs/common";
import { mock } from "jest-mock-extended";
import { JwtStrategyBase } from "../../../auth/jwt/base/jwt.strategy.base";
import { TEST_USER } from "../constants";
import { HolderService } from "../../../holder/holder.service";
describe("Testing the jwtStrategyBase.validate()", () => {
  const userService = mock<HolderService>();
  const jwtStrategy = new JwtStrategyBase("Secrete", userService);
  beforeEach(() => {
    userService.holder.mockClear();
  });
  it("should throw UnauthorizedException where there is no user", async () => {
    //ARRANGE
    userService.holder
      .calledWith({
        where: { username: TEST_USER.username },
      })
      .mockReturnValue(Promise.resolve(null));
    //ACT
    const result = jwtStrategy.validate({
      id: TEST_USER.id,
      username: TEST_USER.username,
      roles: TEST_USER.roles,
    });
    //ASSERT
    return expect(result).rejects.toThrowError(UnauthorizedException);
  });
});
