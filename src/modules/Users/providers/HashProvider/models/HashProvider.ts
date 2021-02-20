export default interface HashProvider {
  generateHash(password: string): Promise<string>
}
