module.exports = {
  '*.ts': ['prettier --write', () => 'tsc --skipLibCheck --noEmit'],
}
