const { SSMClient, GetParametersByPathCommand } = require('@aws-sdk/client-ssm')

async function loadEnv() {
  if (process.env.NODE_ENV !== 'production') return

  const client = new SSMClient({ region: process.env.AWS_REGION || 'eu-central-1' })
  const prefix = '/velo-describe-api/prod/'
  let nextToken

  do {
    const { Parameters, NextToken } = await client.send(new GetParametersByPathCommand({
      Path: prefix,
      WithDecryption: true,
      NextToken: nextToken,
    }))
    for (const p of Parameters) {
      process.env[p.Name.replace(prefix, '')] = p.Value
    }
    nextToken = NextToken
  } while (nextToken)
}

module.exports = loadEnv
